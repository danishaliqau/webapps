class SpecialHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `	<header class="header">
		<!-- Topbar -->
		<div class="topbar">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 col-md-4 col-12">

					</div>
					<div class="col-lg-6 col-md-6 col-12">
						<!-- Top Contact -->
						<ul class="top-contact">
							<li><i class="fa fa-phone"></i>(+92 51) 9260611-5</li>
							<li><i class="fa fa-envelope"></i><a href="mailto:nori@noripaec.pk">nori@noripaec.pk</a>
							</li>
						</ul>
						<!-- End Top Contact -->
					</div>
					<div class="col-lg-2 col-md-2 col-12">
						<div class="get-quote">
							<a href="appointment.html" class="btn">ONLINE REPORTS</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- End Topbar -->
		<!-- Header Inner -->
		<div class="header-inner">
			<div class="container">
				<div class="inner">
					<div class="row">
						<div class="col-12">

							<!-- Main Menu -->
							<div class="main-menu">


								<div style="margin-right: 15px;">
									<!-- Start Logo -->
									<div class="logo">
										<a href="index.html"><img src="img/logo.png" alt="#"></a>
									</div>
									<!-- End Logo -->
									<!-- Mobile Nav -->
									<div class="mobile-nav"></div>
									<!-- End Mobile Nav -->

								</div>

								<nav class="navigation">
									<ul class="nav menu">
										<li class="active"><a href="index.html">Home</a></li>
										<li><a href="aboutus.html">About Us</a></li>
										<li><a href="services.html">Services </a></li>
										<li><a href="#">Departments <i class="icofont-rounded-down"></i></a>
											<ul class="dropdown">
												<li><a href="oncology-department-details.html">Radiation & Clinical Oncology</a></li>
												<li><a href="nuclearmedicine-department-details.html">Nuclear Medicine and Molecular Imaging</a></li>
												<li><a href="#">Medical Physics</a></li>
												<li><a href="radiolog-department-details.html">Diagnosis & Interventional Radiology</a></li>
												<li><a href="#">Haematology</a></li>
												<li><a href="#">Histopathology</a></li>
												<li><a href="pathologylabs-department-details.html">Biomedical Engineering & IT</a></li>
											</ul>
										</li>
										<li><a href="doctorsandstaff.html">Heathcare Professionals <i class="icofont-rounded-down"></i></a>
											<ul class="dropdown">
												<li><a href="doctorsandstaff.html?#onlogogist">Radiation & Clinical Oncologists</a></li>
												<li><a href="doctorsandstaff.html">Nuclear Physicians</a></li>
												<li><a href="doctorsandstaff.html">Medical Physicists</a></li>
												<li><a href="doctorsandstaff.html?#radiologists">Radiologists</a></li>
												<li><a href="doctorsandstaff.html">Haematologists</a></li>
												<li><a href="doctorsandstaff.html">Histopathologists</a></li>
												<li><a href="doctorsandstaff.html">Engineers & IT Professionals</a></li>
												<li><a href="doctorsandstaff.html">Others</a></li>
											</ul>
										</li>

										<li><a href="researchanddevelopment.html">Research & Development <i class="icofont-rounded-down"></i></a>
											<ul class="dropdown">
												<li><a href="#">Training Programs</a></li>
												<li><a href="#">RTMC</a></li>
												<li><a href="#">Projects & Publications</a></li>
											</ul>
										</li>

										<li><a href="patientcaresupport.html">Patient Support & Care <i class="icofont-rounded-down"></i></a>
											<ul class="dropdown">
												<li><a href="#">NPWS</a></li>
												<li><a href="#">Patient Support Group</a></li>
											</ul>
										</li>

										<li><a href="contact.html">Contact Us</a></li>
									</ul>
								</nav>
							</div>
							<!--/ End Main Menu -->
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--/ End Header Inner -->
	</header>`;
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML =`<footer id="footer" class="footer ">
		<!-- Footer Top -->
		<div class="footer-top">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-6 col-12">
						<div class="single-footer">
							<h2>About Us</h2>
							<p>Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor incididunt ut
								labore dolore magna.</p>
							<!-- Social -->
							<ul class="social">
								<li><a href="#"><i class="icofont-facebook"></i></a></li>
								<li><a href="#"><i class="icofont-google-plus"></i></a></li>
								<li><a href="#"><i class="icofont-twitter"></i></a></li>
								<li><a href="#"><i class="icofont-vimeo"></i></a></li>
								<li><a href="#"><i class="icofont-pinterest"></i></a></li>
							</ul>
							<!-- End Social -->
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-12">
						<div class="single-footer f-link">
							<h2>Quick Links</h2>
							<div class="row">
								<div class="col-lg-6 col-md-6 col-12">
									<ul>
										<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Home</a>
										</li>
										<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>About Us</a>
										</li>
										<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Services</a>
										</li>
										<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Our
												Cases</a></li>
										<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Other
												Links</a></li>
									</ul>
								</div>
								<div class="col-lg-6 col-md-6 col-12">
									<ul>
										<li><a href="#"><i class="fa fa-caret-right"
													aria-hidden="true"></i>Consuling</a></li>
										<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Finance</a>
										</li>
										<li><a href="#"><i class="fa fa-caret-right"
													aria-hidden="true"></i>Testimonials</a></li>
										<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li>
										<li><a href="#"><i class="fa fa-caret-right" aria-hidden="true"></i>Contact
												Us</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-12">
						<div class="single-footer">
							<h2>Open Hours</h2>
							<p>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</p>
							<ul class="time-sidual">
								<li class="day">Monday - Fridayp <span>8.00-20.00</span></li>
								<li class="day">Saturday <span>9.00-18.30</span></li>
								<li class="day">Monday - Thusday <span>9.00-15.00</span></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 col-12">
						<div class="single-footer">
							<h2>Newsletter</h2>
							<p>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit
								amet, consectetur adipisicing elit,</p>
							<form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
								<input name="email" placeholder="Email Address" class="common-input"
									onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email address'"
									required="" type="email">
								<button class="button"><i class="icofont icofont-paper-plane"></i></button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--/ End Footer Top -->
		<!-- Copyright -->
		<div class="copyright">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-12">
						<div class="copyright-content">
							<p>© Copyright 2024 | All Rights Reserved by <a href="https://metalinkx.com"
									target="_blank">metalinkx.com</a> </p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--/ End Copyright -->
	</footer>`;
    }
}
customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);