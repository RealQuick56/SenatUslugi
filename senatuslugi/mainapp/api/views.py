from rest_framework.views import APIView
from rest_framework.response import Response


class TestAPIView(APIView):
    def get(self, request, *args, **kwargs):
        data = [{'id': 1, "name": "Death Star"}, {"id": 2, "name": "Senat"}]
        return Response(data)
