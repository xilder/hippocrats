#!/usr/bin/python3
from models.base_model import BaseModel
from models import storage
import unittest
from time import sleep
from datetime import datetime

class TestBaseModel(unittest.TestCase):
    def test_instantiation(self):
        bm_1 = BaseModel()
        bm_2 = BaseModel()
        time_1 = bm_1.updated_at
        sleep(0.05)
        bm_1.name = "dami"
        time_2 = bm_1.updated_at
        storage.save()
        self.assertEqual(type(bm_1), BaseModel)
        self.assertIn(bm_1, storage.all().values())
        self.assertNotEqual(bm_1.id, bm_2.id)
        self.assertNotEqual(time_1, time_2)
