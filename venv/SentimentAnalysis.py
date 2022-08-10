from flask import Flask, jsonify, request
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

app = Flask(__name__)
output = {}


def sentiment(sentence):
    nltk.download('vader_lexicon')
    sid = SentimentIntensityAnalyzer()
    score = sid.polarity_scores(sentence)['compound']

    if score > 0.5:
        return 5
    elif score <= 0.5 and score > 0:
        return 4
    elif score == 0:
        return 3
    elif score >= -0.5 and score < 0:
        return 2
    else:
        return 1


@app.route('/', methods=['GET'])
def sentimentRequest():
    if request.method == "POST":
        sentence = request.form['q']
    else:
        sentence = request.args.get('q')
    sent = sentiment(sentence)
    output['sentiment'] = sent
    return jsonify(sent)


if __name__ == "__main__":
    # Replace the IP Address With your System Ip Address
    app.run(host="192.168.10.7", port=80)
    # app.run(debug=True)
