@extends(BaseHelper::getAdminMasterLayoutTemplate())
@section('content')
    <div id="dashboard-alerts">
        
    </div>
    {!! apply_filters(DASHBOARD_FILTER_ADMIN_NOTIFICATIONS, null) !!}
    <div class="row">
        {!! apply_filters(DASHBOARD_FILTER_TOP_BLOCKS, null) !!}
    </div>
    <div class="row">
        @foreach ($statWidgets as $widget)
            {!! $widget !!}
        @endforeach
    </div>
    <div id="list_widgets" class="row">
        @foreach ($userWidgets as $widget)
            {!! $widget !!}
        @endforeach
    </div>

    @if (count($widgets) > 0)
        <a href="#" class="manage-widget">
            <i class="fa fa-plus"></i>
            {{ trans('core/dashboard::dashboard.manage_widgets') }}
        </a>
        @include('core/dashboard::partials.modals', compact('widgets'))
    @endif
@stop
