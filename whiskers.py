from flask import Flask, render_template
#You need to use following line [app Flask(__name__]
app = Flask(__name__)


@app.route('/')
def home():
    data = {
        "title": "Home Page",
    }
    return render_template('home.html', data=data)

@app.route('/timer')
def hello():
    data = {
        'fish': 5000, 
        'name': "McNugget",
        'hours': 0,
        'cycle': 0
    }
    return render_template('whiskers.html', data=data)

if __name__ == '__main__':
    app.run(port=5000,debug=True)
