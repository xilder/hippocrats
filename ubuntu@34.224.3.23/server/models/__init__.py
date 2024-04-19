#!/usr/bin/python3
"""
imports all models created and
creates a storage engine model
"""
from os import getenv

if getenv("ENV_DB") == 'db':
    from models.engine.db_storage import DBStorage
    storage = DBStorage()
else: 
    from models.engine.file_storage import FileStorage
    storage = FileStorage()
    
storage.reload()