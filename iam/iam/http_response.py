import inspect
import logging

from rest_framework import status
from rest_framework.response import Response

# from . import util

# logger = logging.getLogger(__file__)


def response(status_code, items):
    if status_code == 200:
        message = "200"
        response_status = status.HTTP_200_OK
    elif status_code == 400:
        message = "400"
        response_status = status.HTTP_400_BAD_REQUEST
    elif status_code == 500:
        message = "500"
        response_status = status.HTTP_500_INTERNAL_SERVER_ERROR
    else:
        message = "500"
        response_status = status.HTTP_500_INTERNAL_SERVER_ERROR
    return Response(
        {'message': message, 'items': items},
        status=response_status
    )


def error(status_code, log_error=None):
    # caller_frame_record = inspect.stack()[1]
    # frame = caller_frame_record[0]
    # info = inspect.getframeinfo(frame)
    # logger.error(
    #     str(log_error) + " " +
    #     "(" + (util.parse_file_name(info.filename)) + "." + info.function + ") " +
    #     "line " + str(info.lineno)
    # )
    return response(status_code, None)


def success(response_data=None):
    return response(200, response_data)
