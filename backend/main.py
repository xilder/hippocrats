#!/usr/bin/python3
from models.base_model import BaseModel
from models import storage

base_one = BaseModel()
base_two = BaseModel()
storage.save()
id = base_one.id

print(storage.show(id))
print(base_one)
storage.delete(base_one)
print(storage.show(id))
print(storage.all())