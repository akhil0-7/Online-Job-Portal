from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail

from .models import Job, Application
from .serializers import JobSerializer, ApplicationSerializer


class JobViewSet(viewsets.ModelViewSet):
    queryset = Job.objects.all()
    serializer_class = JobSerializer
    permission_classes = [AllowAny]

    # override create to see validation errors
    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            serializer.save()   # no employer, no user
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        # print exact error in terminal
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            app = serializer.save()

            send_mail(
                'Job Application Submitted',
                'Your application was submitted successfully',
                'admin@jobportal.com',
                ['test@example.com'],  # temporary email
                fail_silently=True
            )

            return Response(serializer.data, status=status.HTTP_201_CREATED)

        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
