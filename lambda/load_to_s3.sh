zip users.zip users.py;
s3cmd put users.zip s3://ryntck-lambda-test;
zip present.zip present.py;
s3cmd put present.zip s3://ryntck-lambda-test;
