zip user.zip ../lambda/models/user.py;
s3cmd put user.zip s3://ryntck-lambda-test;
zip present.zip ../lambda/models/present.py;
s3cmd put present.zip s3://ryntck-lambda-test;
