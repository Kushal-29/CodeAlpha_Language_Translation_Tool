from flask import Flask, render_template, request, jsonify
from deep_translator import GoogleTranslator

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate', methods=['POST'])
def translate():
    data = request.json
    text = data['text']
    source = data['source']
    target = data['target']

    translated_text = GoogleTranslator(
        source=source,
        target=target
    ).translate(text)

    return jsonify({
        'translated_text': translated_text
    })

if __name__ == '__main__':
    app.run(debug=True)
