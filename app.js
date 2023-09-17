document.getElementById('execute').addEventListener('click', function () {
    var mainKeywords = document.getElementById('mainKeywords').value.split('\n');
    var secondaryKeywords = document.getElementById('secondaryKeywords').value.split('\n');

    var numColumns = document.getElementById('numColumns').value;

    var mainKeywordsPerColumn = Math.ceil(mainKeywords.length / numColumns);
    var secondaryKeywordsPerColumn = Math.ceil(secondaryKeywords.length / numColumns);

    var output = document.getElementById('output');
    output.innerHTML = '';

    for (var i = 0; i < numColumns; i++) {
        var column = document.createElement('div');
        column.className = 'column';

        var mainKeywordSlice = mainKeywords.splice(0, mainKeywordsPerColumn);
        var secondaryKeywordSlice = secondaryKeywords.splice(0, secondaryKeywordsPerColumn);

        var p = document.createElement('p');
        p.textContent = [...mainKeywordSlice, ...secondaryKeywordSlice].join(', ');
        column.appendChild(p);


        var copyBtn = document.createElement('button');
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        copyBtn.className = "copy-btn";
        copyBtn.addEventListener('click', function () {
            navigator.clipboard.writeText(this.previousSibling.textContent);
            this.setAttribute('title', 'Copied!');
        });


        column.appendChild(copyBtn);
        output.appendChild(column);
    }
});
