import tkinter as tk
import time

root = tk.Tk()
root.title("Digital Python Clock")

label =tk.Label(root, font=("Arial", 60), bg="black", fg="green")
label.pack(padx=20, pady=20)

def update_time():
    label.config(text=time.strftime("%H:%M:%S"))
    root.after(1000, update_time)  # Update every second

update_time()  # Start the clock
root.mainloop()  # Run the Tkinter event loop