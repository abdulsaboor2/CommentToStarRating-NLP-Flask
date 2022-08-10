# CommentToStarRating-NLP-Flask
In this Repository, I will Build a text Analysis System where user will enter a text the model will detect weather this is positive negative or Neutral. NLP is used to get the sentiment of text on The Python framework Flask.

This is positive Prediction from the Model

![image](https://user-images.githubusercontent.com/57446794/183933581-6a7aac6f-932b-4eee-8fb6-80dc2706650c.png)

This is Negative Prediction from the model

![image](https://user-images.githubusercontent.com/57446794/183933999-e8eef7d9-6296-47e3-b914-ea0a182dcdeb.png)


#NLP and how it’s work
NLP Stand for Natural Language Processing. NLP is a branch of artificial intelligence. It concerned with the interaction between computer and human language. It helps machines to understand the human language so that they can automatically perform repetitive tasks. 

#NLP used for
It helps computers to communicate with humans in their own language. For example, NLP makes it possible for computers to read text, hear speech, interpret it, measure sentiment and determine which parts are important. 

#Sentiment Analysis 
Sentiment Analysis is a NLP that identify the human Emotions based on its word, slangs, conjunctions, capital words, punctuations and much more. It is converting the word or sentence into the points and return the prediction (Positive, Negative or Neutral). So that we can find easy prediction to solve our problem.

#Flask
We build our Model in Flask. Flask is a framework of Python. We use library of nltk (Netural language ToolKit) within nltk we used nltk.sentiment.vader library with returns a function SentimentIntensityAnalyzer.

#NLTK
The Natural Language Toolkit is a set of libraries used for building Python programs that work with human language data for applying in statistical natural language processing (NLP).

#Vader
VADER (Valence Aware Dictionary and Sentiment Reasoner) is an Unsupervised Algorithm. It is an open source and real time prediction algorithm that give us response on run time. It does not require any training data. It has built-in solution of removing stop word, and bundle of dictionaries. It is less resource consuming sentiment analysis. The Algorithm mainly build for sentiment analysis. We can used it for Online Movie reviews, News sentiment analysis, social media sentiment analysis, Online food reviews etc.

Vader build manually and make it 10 human annotators.
data is 7517 rows of words.
Solve the problem bad English word, abbreviation, emojis.

It returns 4 value pos, neg, neu, compound.
(pos > 0) (neg > -0) (neu < 0)

The sentiment will return based on words within the paragraph. Vader is used to sentiment of complete paragraph. (Vader_lexicon) is a library which have all the vocabulary, stop word, boost word, negative word ant etc. Lexical features are (nouns, verbs, adjectives, adverbs, compound noun, and word family)

#Features: -
These features include:
•	A full list of Western-style emoticons (for example - :D and :P)
•	Sentiment-related acronyms (for example - LOL and ROFL)
•	Commonly used slang with sentiment value (for example - Nah and meh, Oh)

#Relevent Algorithms:
TextBlop: 56% Accuracy.
VADER: 56% Accuracy.
Flair: 50% Accuracy.
