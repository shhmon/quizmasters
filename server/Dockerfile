FROM python:3
COPY . /server
WORKDIR /server
RUN pip install -r requirements.txt
EXPOSE 5000
ENTRYPOINT ["python"]
CMD ["app.py"]