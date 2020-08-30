function givenName(s)

{

    return s.split(", ")[1];

}

function prefix(s1, s2)

{

    var p = "";

    var l1 = s1.length;

    var l2 = s2.length;

    var n;

    if (l1 < l2)

        n = l1

    else

        n = l2

    var i = 0;

    for (i = 0; i < n; i++)

    {

        if (s1[i] != s2[i])

            return p;

        p = p + s1[i];

    }

    return p;

}

HTML Code:

    <
    html >

    <
    head >

    <
    /head>

<
body >

    <
    script >

    document.write(givenName("Reagan, Ronald<br>"));

document.write(prefix("disable", "distasteful"));

function givenName(s)

{

    return s.split(", ")[1];

}

function prefix(s1, s2)

{

    var p = "";

    var l1 = s1.length;

    var l2 = s2.length;

    var n;

    if (l1 < l2)

        n = l1

    else

        n = l2

    var i = 0;

    for (i = 0; i < n; i++)

    {

        if (s1[i] != s2[i])

            return p;

        p = p + s1[i];

    }

    return p;

}

<
/script>

<
/body>

<
/html>