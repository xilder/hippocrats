#!/usr/bin/python3
"""
Console class
"""
import cmd
import json
from models.base_model import BaseModel
from models.explanation import Explanation
from models.option import Option
from models.question import Question
from models.user import User
from models import storage

class HippocratCommand(cmd.Cmd):
    """
    Defines the class commands for the console

    Type "help" to display the list of available commands

    Type "help <command>" to get help on any command

    Attributes:
        prompt: console prompt
        __models: list of available models
    """
    prompt = "(Hippocrat) "
    __models = {
        "BaseModel": BaseModel,
        "Explanation": Explanation,
        "Option": Option,
        "Question": Question,
        "User": User
    }

    def do_quit(self, line):
        """
        exits the interpreter
        """
        return True
    
    def help_quit(self):
        """
        help on the quit command
        """
        print("Usage: quit")
        print("exits the command interpreter")

    def do_EOF(self, line):
        """
        exits the interpreter
        """
        return True
    
    def help_EOF(self):
        """
        help on the EOF command
        """
        print("Usage: Ctrl + D")
        print("exits the command interpreter")

    def emptyline(self):
        """
        skips empty lines
        """
        pass

    


if __name__ == "__main__":
    HippocratCommand().cmdloop()

