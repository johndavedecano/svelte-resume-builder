<script>
  const handlePrint = () => {
    const myWindow = window.open(
      "",
      "Resume Builder",
      "width=793.7007874,height=1122.519685"
    );

    const contents = document.getElementById("resume").cloneNode(true);

    myWindow.document.write("<html><head><title>My Resume</title>");
    myWindow.document.write('<link rel="stylesheet" href="/assets/css/print.css">')
    myWindow.document.write(
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.2.1/css/bootstrap.min.css" />'
    );
    myWindow.document.write("</head><body >");
    myWindow.document.body.appendChild(contents);
    myWindow.document.write("</body></html>");
    myWindow.onload = function () {
      myWindow.focus();
      myWindow.print();
    };
  };
</script>

<div class="resume-toolbar d-flex align-items-center">
  <div class="flex-grow-1 fw-bold">Lets building your resume today.</div>
  <!-- <button class="btn btn-success me-2 btn-lg btn-sm">
    <i class="fa fa-comment" />
  </button> -->
  <button class="btn btn-primary btn-lg btn-sm me-2" on:click={handlePrint}>
    <i class="fa fa-print" />
  </button>
</div>

<style>
  .resume-toolbar {
    height: 60px;
    width: 100%;
    border-bottom: solid 1px #ddd;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
