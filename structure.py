import json

class Tree:
    def __init__(self):
        self.topics = []

class Topic:
    def __init__(self):
        self.lessons = []

class Lesson:
    def __init__(self):
        pass

    def load(self, filename):
        lesson = json.load(filename)

        self.title = lesson.title
        self.description = lesson.description
