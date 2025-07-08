# Gunicorn configuration file
import multiprocessing

bind = '0.0.0.0:8000'
workers = multiprocessing.cpu_count() * 2 + 1
worker_class = 'gevent'
timeout = 30
keepalive = 2
errorlog = '-'
loglevel = 'info'
accesslog = '-'
preload_app = True
