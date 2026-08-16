from flask import Flask, render_template

app = Flask(__name__)

# Add your own media files to:
# static/media/photography/
# static/media/videography/
#
# For videos, MP4/WebM files will be shown automatically.
# You can also use YouTube/Vimeo embeds by editing videography.html.

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/photography")
def photography():
    return render_template("photography.html")

@app.route("/videography")
def videography():
    return render_template("videography.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/works")
def works():
    return render_template("index.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")
if __name__ == "__main__":
    app.run()
