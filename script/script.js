function submitForm() {
    var nama = document.getElementById("nama").value;
    if (nama) {
        // Update content with welcome message
        document.getElementById("form-title").innerHTML = "Haiii " + nama + " cantikkk!";
        document.getElementById("form-content").innerHTML = `
            <div class="mt-3">
                <h6>Apakah kamu mencintaiku?</h6>
                <a href="form_baru.html" class="btn btn-primary">I love you</a>
                <button class="btn btn-danger" onclick="return false;">G</button>
            </div>
        `;
    }
}