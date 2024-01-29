#!/usr/bin/python3
"""
imports all models created and
creates a storage engine model
"""
from models.engine.file_storage import FileStorage

storage = FileStorage()
storage.reload()