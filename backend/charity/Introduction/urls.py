

from django.urls import path

from .views import (
    VisionView,HistoryView,MissionView,ChartView,
    StatuteView
)

urlpatterns = [
    path('vision/',VisionView.as_view(),name='vision'),
    path('history/',HistoryView.as_view(),name='history'),
    path('mission/',MissionView.as_view(),name='mission'),
    path('chart/',ChartView.as_view(),name='chart'),
    path('statute/',StatuteView.as_view(),name='statute'),


]














