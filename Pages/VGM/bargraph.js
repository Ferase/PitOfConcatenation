// JavaScript Document

anychart.onDocumentReady(function() {

    anychart.theme(anychart.themes.darkEarth);
    
    /*
    1930 : 2
    1961 : 2
    1964 : 1
    1965 : 1
    1966 : 1
    1967 : 4
    1969 : 4
    1970 : 2
    1972 : 2
    1973 : 4
    1975 : 2
    1976 : 2
    1978 : 2
    1982 : 3
    1983 : 8
    1984 : 4
    1985 : 9
    1986 : 5
    1987 : 164
    1988 : 76
    1989 : 144
    1990 : 137
    1991 : 325
    1992 : 204
    1993 : 140
    1994 : 930
    1995 : 268
    1996 : 581
    1997 : 70
    1998 : 27
    1999 : 225
    2000 : 201
    2001 : 138
    2002 : 190
    2003 : 339
    2004 : 447
    2005 : 172
    2006 : 238
    2007 : 478
    2008 : 307
    2009 : 135
    2010 : 69
    2011 : 192
    2012 : 12
    2013 : 51
    2014 : 28
    2015 : 25
    2016 : 9
    2017 : 3
    2018 : 5
    50 years*/
    
    // set the data
    var data = {
      header: ["Year", "Number of Games Analyzed"],
      rows: [
        ["1930", 2],
        ["1961", 2],
        ["1964", 1],
        ["1965", 1],
        ["1966", 1],
        ["1967", 4],
        ["1969", 4],
        ["1970", 2],
        ["1972", 2],
        ["1973", 4],
        ["1975", 2],
        ["1976", 2],
        ["1978", 2],
        ["1982", 3],
        ["1983", 8],
        ["1984", 4],
        ["1985", 9],
        ["1986", 5],
        ["1987", 164],
        ["1988", 76],
        ["1989", 144],
        ["1990", 137],
        ["1991", 325],
        ["1992", 204],
        ["1993", 140],
        ["1994", 930],
        ["1995", 268],
        ["1996", 581],
        ["1997", 70],
        ["1998", 27],
        ["1999", 225],
        ["2000", 201],
        ["2001", 138],
        ["2002", 190],
        ["2003", 339],
        ["2004", 447],
        ["2005", 172],
        ["2006", 238],
        ["2007", 478],
        ["2008", 307],
        ["2009", 135],
        ["2010", 69],
        ["2011", 192],
        ["2012", 12],
        ["2013", 51],
        ["2014", 28],
        ["2015", 25],
        ["2016", 9],
        ["2017", 3],
        ["2018", 5]
    ]};

    // create the chart
    var chart = anychart.column();

    // add data
    chart.data(data);

    // set the chart title
    chart.title("Release Years of Games Researched by the VGM Analysis Community");


    // draw
    chart.container("graphContainer");
    chart.draw();
});