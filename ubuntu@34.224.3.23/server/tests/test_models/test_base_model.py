#!/usr/bin/python3
from models.base_model import BaseModel
from models import storage
import unittest
from datetime import datetime

class TestBaseModel(unittest.TestCase):
    def test_instantiation(self):
        bm_1 = BaseModel()
        bm_2 = BaseModel()
        storage.save()
        self.assertEqual(type(bm_1), BaseModel)
        self.assertIn(bm_1, storage.all().values())
        self.assertNotEqual(bm_1.id, bm_2.id)
        self.assertEqual(str, bm_1.id)
        self.assertEqual(datetime, bm_1.created_at)
        self.assertEqual(datetime, bm_1.updated_at)
