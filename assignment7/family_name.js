// function givenName(s)

// {

//     return s.split(", ")[1];

// }

function prefix(string1, string2)

{

    let = "";

    let length_1 = string1.length;

    let length_2 = string2.length;

    let n;

    if (length_1 < length_2)

        n = length_1

    else

        n = length_2

    for (let i = 0; i < n; i++)

    {
        if (string1[i] != string2[i])

            return p;

        p = p + string1[i];

    }

    return p;

}
let use1 = prompt("enter st1 :");
let use2 = prompt("enter st2: ");
let ans = prefix(use1, use2);

// HTML Code:

//     <
//     html >

//     <
//     head >

//     <
//     /head>

// <
// body >

//     <
//     script >

//     document.write(givenName("Reagan, Ronald<br>"));

// document.write(prefix("disable", "distasteful"));

// function givenName(s)

// {

//     return s.split(", ")[1];

// }

// function prefix(s1, s2)

// {

//     var p = "";

//     var l1 = s1.length;

//     var l2 = s2.length;

//     var n;

//     if (l1 < l2)

//         n = l1

//     else

//         n = l2

//     var i = 0;

//     for (i = 0; i < n; i++)

//     {

//         if (s1[i] != s2[i])

//             return p;

//         p = p + s1[i];

//     }

//     return p;

// }

// <
// /script>

// <
// /body>

// <
// /html>