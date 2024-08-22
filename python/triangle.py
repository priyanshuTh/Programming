from turtle import *

# Set up the screen
screen = Screen()
screen.title("Triangle Drawing")
screen.setup(width=600, height=600)
# Create a turtle
t = Turtle()

# Draw a triangle
for _ in range(3):
    t.forward(100)  # Move forward by 100 units
    t.left(120)     # Turn left by 120 degrees to create the triangle shape

# Keep the window open
screen.mainloop()
