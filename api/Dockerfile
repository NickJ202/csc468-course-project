# Pull official base image
FROM --platform=linux/amd64 python:3

# Set working directory
WORKDIR /code/

# Set environment
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Install dependencies 
RUN pip install --upgrade pip
COPY requirements.txt /code/
RUN pip install -r requirements.txt

# Copy entrypoint.sh
COPY ./entrypoint.sh .
RUN chmod +x ./entrypoint.sh
RUN sed -i 's/\r$//g' ./entrypoint.sh

# copy project
COPY . /code/

# run entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]
