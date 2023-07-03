

from django.urls import path

from .views import (
    VisionView,HistoryView,MissionView,ChartView,
    StatuteView,ValuesView,PermissionsView,FinancialView,
    PerformanceView,AuditView,FaqView
)

urlpatterns = [

    # about part
    path('vision/',VisionView.as_view(),name='vision'),
    path('history/',HistoryView.as_view(),name='history'),
    path('mission/',MissionView.as_view(),name='mission'),
    path('chart/',ChartView.as_view(),name='chart'),
    path('statute/',StatuteView.as_view(),name='statute'),
    path('values/',ValuesView.as_view(),name='values'),
    path('permissions/',PermissionsView.as_view(),name='permissions'),


    # reports part
    path('reports/financial/',FinancialView.as_view(),name='financial'),    # صورت مالی 
    path('reports/audit',AuditView.as_view(),name='audit'),          
    path('reports/performance',PerformanceView.as_view(),name='performance'),



    # frequently asked questions
    path('faq/',FaqView.as_view(),name='faq'),



    # members 
    #path('Partners/'),

    
]















