 fetch("https://echos0909.herokuapp.com/emps")
        .then(response => response.json())
        .then(data => {
            console.table(data)
            // document.getElementById('name').innerHTML = data[2]['name']
            output = ""
            for (i = 0; i < data.length; i++) {
                output += `<tr>`
                output += `<td>${data[i]['id']}</td>`
                output += `<td>${data[i]['name']}</td>`
                output += `<td>${data[i]['Writer']}</td>`
                output += `<td>${data[i]['Edition']}</td>`
                output += `</tr>`
            }

            console.log(output)

            document.getElementById('emps').innerHTML = output
        })
