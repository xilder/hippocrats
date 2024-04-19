#!/usr/bin/python3
"""
file_storage engine
"""
import json
from models.base_model import BaseModel
from models.explanation import Explanation
from models.option import Option
from models.question import Question
from models.user import User

class FileStorage:
    """
    defines the FileStorage for storing and restoring
    instances
    """
    __file_path = "file.json"
    __objects = {}
    __models = {
        "BaseModel": BaseModel,
        "Explanation": Explanation,
        "Option": Option,
        "Question": Question,
        "User": User
    }
    def all(self, cls=None):
        """
        returns all the objects if class is none
        or just the class' instances if class is valid
        """
        if cls is not None:
            new_dict = {}
            for k, v in self.__objects.items():
                if cls == v.__class__ or cls == v.__class__.__name__:
                    new_dict[k] = v
            return new_dict
        return self.__objects

    def count(self, cls=None):
        """
        the number of instances of a class or total number
        instances
        """
        if cls is not None:
            total = 0
            for v in self.__objects.values():
                if cls == v.__class__ or cls == v.__class__.__name__:
                    total += 1
            return total
        return len(self.__objects)

    def delete(self, obj):
        """"
        deletes an object
        """
        if obj is not None:
            key = f"{obj.__class__.__name__}.{obj.id}"
            if key in self.__objects:
                del self.__objects[key]
                # self.save()

    def new(self, obj):
        """
        stores new obj created in the engine
        """
        if obj is not None:
            self.__objects[f"{obj.__class__.__name__}.{obj.id}"] = obj

    def save(self):
        """
        saves all objects to a file
        """
        with open(self.__file_path, "w", encoding="UTF-8") as f:
            json_obj = {}
            for k, v in self.__objects.items():
                json_obj[k] = v.to_dict()
            json.dump(json_obj, f)

    def show(self, id=None):
        """
        returns the element with the given id
        """
        if id is not None:
            for k, v in self.__objects.items():
                if id == v.id:
                    return self.__objects[k]
        return None

    def reload(self):
        """
        loads all json stored in the file back into objects
        """
        try:
            with open(self.__file_path, "r", encoding="UTF-8") as f:
                for k, v in json.load(f).items():
                    self.__objects[k] = self.__models[v["__class__"]](**v)
        except Exception as ex:
            pass