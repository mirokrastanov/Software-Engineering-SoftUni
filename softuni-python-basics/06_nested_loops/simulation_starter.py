def makeModel(data):
    # Set up your simulation components here, by setting
    # data["compName"] = component
    pass

def makeView(data, canvas):
    # Write your simulation view here, using the Tkinter canvas
    pass

def runRules(data, call):
    # Write your simulation rules here, by changing data
    pass

def keyPressed(data, event):
    # Use event.char to get the character pressed
    pass

def mousePressed(data, event):
    # Use event.x and event.y to get the (x,y) location of the clicked pixel
    pass

# You do not need to be able to write the following functions;
# just modify the five functions above.

from tkinter import *

def timeLoop(data, canvas, call):
    runRules(data, call)

    canvas.delete(ALL)
    makeView(data, canvas)
    canvas.update()

    canvas.after(data["timeRate"], timeLoop, data, canvas, call + 1)

def keyEventHandler(data, canvas, event):
    keyPressed(data, event)
    
    canvas.delete(ALL)
    makeView(data, canvas)
    canvas.update()
    
def mouseEventHandler(data, canvas, event):
    mousePressed(data, event)
    
    canvas.delete(ALL)
    makeView(data, canvas)
    canvas.update()
    
def runSimulation(w, h, timeRate):
    data = { }
    data["timeRate"] = int(timeRate * 1000) # call will be in ms
    makeModel(data)
    
    root = Tk()
    canvas = Canvas(root, width=w, height=h)
    canvas.configure(bd=0, highlightthickness=0)
    canvas.pack()
    makeView(data, canvas)
    
    canvas.after(data["timeRate"], timeLoop, data, canvas, 1)
    
    root.bind("<Key>", lambda event : keyEventHandler(data, canvas, event))
    root.bind("<Button-1>", lambda event : mouseEventHandler(data, canvas, event))
    
    root.mainloop()

runSimulation(400, 400, 0.1)
