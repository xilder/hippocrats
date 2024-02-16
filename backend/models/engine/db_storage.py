#!usr/bin/python3
"""
db_storage engine
"""
import json
import models
from models.base_model import BaseModel, Base
from models.explanation import Explanation
from models.option import Option
from models.question import Question
from models.user import User
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from os  import getenv
models = {
        "BaseModel": BaseModel,
        "Explanation": Explanation,
        "Option": Option,
        "Question": Question,
        "User": User
    }

class DBStorage:
    """
    interacts with the MySQL database
    """
    __engine = None
    __session = None

    def __init__(self):
        "initialises a DBStorage object"
        user = getenv("USER")
        pwd = getenv("PWD")
        host = getenv("HOST")
        db = getenv("DB")
        self.__engine = create_engine(f"mysql+mysqldb://{user}:{pwd}@{host}/{db}")

    def new(self, obj):
        """adds the obj to the database"""
        self.__session.add(obj)

    def reload(self):
        """reloads data from the database"""
        Base.metadata.create_all(self.__engine)
        session_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
        Session = scoped_session(session_factory)
        self.__session = Session

    def save(self):
        """saves all changes to the databases"""
        self.__session.commit()

    def delete(self, obj=None):
        """deletes the give obj"""
        if obj is not None:
            self.__session.delete(obj)

    def close(self):
        """removes the session"""
        self.__session.remove()

    def all(self, cls=None):
        """gets all the instances of a class"""
        new_dict = {}
        if cls is not None:
            for model in models:
                    if cls == model or cls == models[model]:
                        objs = self.__session.query(models[model]).all() 
                        for obj in objs:
                            k = f"{obj.__class__.__name__}.{obj.id}"
                            new_dict[k] = obj
        return new_dict

    def get(self, cls=None, id=None):
        """get a particular object using the class and id"""
        if cls not in models.values():
            return None
        if id is not None:
            objs = self.all(cls).values()
            for obj in objs:
                if obj.id == id:
                    return obj.to_dict()
        return None

    def get_by_username_email(self, data):
        """get a user by username or email"""
        if data is not None:
            user_objs = self.all("User").values()
            for user in user_objs:
                if user.user_name == data or user.email == data:
                    return user.to_dict()
        return None
    
    def count(self, cls=None):
        """gets the number of objects in storage"""
        if cls is None:
            all_classes = models.values()
            count = 0
            for clss in all_classes:
                count += len(self.all(clss).values())
        else:
            count = len(self.all(cls).values())
        return count
