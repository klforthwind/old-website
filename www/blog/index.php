
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">

        <title>Forthwind</title>
		<link rel="stylesheet" href="../main.css" />
		<link rel="stylesheet" href="style.css" />
		<link rel="stylesheet" href="monokai.css" />
		<link rel="shortcut icon" href="../24x24Forthwind.jpg"/> 

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Links to Forthwind's stuff" />

		<!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-135031848-1"></script>
		<script defer src="../googleAnalytics.js"></script>
	</head>
	<body>
		<section id="rc">
			<div id="picture">
				<a href="/blog/"><img src="../400x400Forthwind.jpg" alt="Forthwind" height="128px" width="128px"></a>
				<h1>Forthwind's blog</h1>
				<h2>Uhhh... I tried.</h2>
			</div>
			<!--Place to add blog articles below here-->
			<div id="root"></div>
			<div id = "info">
				<p style="width: 100px; margin: 0 auto; background: #333; padding: 10px 10px 0 10px"><a href = "mailto:klforthwind@gmail.com"><img width=40px height=40px src = "gmail-logo.svg"></a>
				<a style="float:right" href="https://www.github.com/klforthwind"><img  width=40px height=40px src = "github.png"></a></p>
			</div>
			<script defer>var page='<?php echo $_GET["page"]; ?>';</script>
			<script defer src="script.js"></script>
		</section>
		<input type="hidden" name="page" id="page">
	</body>
</html>
