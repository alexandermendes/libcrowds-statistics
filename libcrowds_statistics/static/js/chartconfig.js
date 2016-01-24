Chart.defaults.global= {
    animation: true,
    animationSteps: 60,
    animationEasing: "easeOutQuart",
    showScale: true,
    scaleOverride: false,
    scaleSteps: null,
    scaleStepWidth: null,
    scaleStartValue: null,
    scaleLineColor: "rgba(0,0,0,.1)",
    scaleLineWidth: 1,
    scaleShowLabels: true,
    scaleLabel: "<%=value%>",
    scaleIntegersOnly: true,
    scaleBeginAtZero: false,
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    scaleFontSize: 12,
    scaleFontStyle: "normal",
    scaleFontColor: "#666",
    responsive: true,
    maintainAspectRatio: true,
    showTooltips: true,
    customTooltips: false,
    tooltipEvents: ["mousemove", "touchstart", "touchmove"],
    tooltipFillColor: "rgba(0,0,0,0.8)",
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    tooltipFontSize: 14,
    tooltipFontStyle: "normal",
    tooltipFontColor: "#fff",
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    tooltipTitleFontSize: 14,
    tooltipTitleFontStyle: "bold",
    tooltipTitleFontColor: "#fff",
    tooltipYPadding: 6,
    tooltipXPadding: 6,
    tooltipCaretSize: 8,
    tooltipCornerRadius: 6,
    tooltipXOffset: 10,
    onAnimationProgress: function() {},
    onAnimationComplete: function() {},
    segmentShowStroke:  true,
    segmentStrokeColor:  "#fff",
    tooltipTemplate:  "<%%><%=label%><%%>",
    segmentStrokeWidth:  2,
    percentageInnerCutout:  50,
    animateRotate:  true,
    animateScale:  false,
    legendTemplate:  '\
        <ul class=\"<%=name.toLowerCase()%>-legend\"> \
        <% for (var i=0; i<segments.length; i++)\u007D%> \
          <li> \
            <span style=\"background-color: <%=segments[i].fillColor%>\"> \
            </span> \
            <%if(segments[i].label)\u007D%> \
              <%=segments[i].label%\u007B<%}%> \
          </li> \
        <%\u007B%> \
        </ul>'
}