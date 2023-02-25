from flask import Flask, render_template
#You need to use following line [app Flask(__name__]
app = Flask(__name__)
@app.route('/')
def hello():
    data = {
        'fish': 5, 
        'name': "mcNugget",
        'hours': 3,
        'cycle': 1
    }
    return render_template('test.html', data=data)

if __name__ == '__main__':
    app.run(port=5000,debug=True)