
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">

        <title>Forthwind</title>
        <link rel="stylesheet" href="style.css" />
		<link rel="shortcut icon" href="../24x24Forthwind.jpg"/> 

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Links to Forthwind's stuff" />

		<!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-135031848-1"></script>
		<script defer src="../googleAnalytics.js"></script>
	</head>
	<body>
		<section id="container">
			<a href="/blog/"><img src="../400x400Forthwind.jpg" alt="Forthwind" height="128px" width="128px"></a>
			<h1>Forthwind's blog</h1>
			<h2>Uhhh... I tried.</h2>
			<!--Place to add blog articles below here-->
			<div id="root"></div>
			<script defer>var page='<?php echo $_GET["page"]; ?>';</script>
			<script defer src="script.js"></script>
		</section>
		<input type="hidden" name="page" id="page">
	</body>
</html>
