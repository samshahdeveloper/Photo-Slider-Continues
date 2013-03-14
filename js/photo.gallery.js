// JavaScript Document
var PhotoGallery = {
	imageIndex : 0, // Starting index for the slider
	totalImages : null, // Total images in the slider
	ButtonNext : null, //  Next arrow into slider
	ButtonPrev: null, // Prevoius arrow into slider
	imgHeight : 527, // Provide the hight of the slider images
	imgWidth : 936, // Provide the width of the slider images
	contentHolder : null, // Current Slider Content ID in this case 'sliderContent'
	movingHolder : null, // Moving Content ID in this case 'sliderPlaceholder'
	IMAGE_SCROLL_SPEED : 500, // Speed of animation
	sliderHTML : null, // Required to hold the next html for the slider
	sliderList : [], // Required to create duplicate list of slider
	ImageClass : null, // Image class
	
	initial : function()
	{
		PhotoGallery.totalImages = jQuery('#sliderContent > .sliderImg').size(); // Count the total number of images into slider
		jQuery('#sliderContent > .sliderImg').each(function(){
			PhotoGallery.sliderList.push(jQuery(this).html());  // This will create duplicate content of slider and put into array
		});
		PhotoGallery.contentHolder = jQuery('#sliderLists > #sliderContent'); // Current content id for later reference
		PhotoGallery.movingHolder =  jQuery('#sliders .sliderPlaceholder'); // Moving slider for later reference
		PhotoGallery.ButtonNext = jQuery('#sliders > .Next'); // Next button
		PhotoGallery.ButtonPrev = jQuery('#sliders > .Previous'); // Previous button
		PhotoGallery.ImageClass = jQuery('#sliderContent > .sliderImg > .photoImg');
		
		// Hide moving slider on page load
		PhotoGallery.movingHolder.hide();
		// Display first image of the slider
		PhotoGallery.contentHolder = jQuery('#sliderImg' + PhotoGallery.imageIndex ).addClass('active');
	},
	Next : function()
	{
		if(PhotoGallery.imageIndex == (PhotoGallery.totalImages - 1))
		{	
			PhotoGallery.imageIndex = -1;  // Set the value of index to -1 if its reach to totalimages into slider
		}
		PhotoGallery.imageIndex += 1; // Increment index 
		PhotoGallery.ImageClass.show();
		PhotoGallery.movingHolder.show(); // Show moving place holder
		PhotoGallery.movingHolder.css({'left': + PhotoGallery.imgWidth + 'px'}); // Put moving placeholder left side of the main slider
		PhotoGallery.sliderHTML = PhotoGallery.sliderList[PhotoGallery.imageIndex];	// Get the html of current index		 
		PhotoGallery.movingHolder.html(PhotoGallery.sliderHTML); // Put the html into moving place holder
		jQuery(PhotoGallery.movingHolder).stop(true).animate({left:'0px'}, PhotoGallery.IMAGE_SCROLL_SPEED,'easeInOutExpo',function(){ // Animate moving holder until it's left position become '0px'
			jQuery('.sliderImg').removeClass('active'); // Remove active class from main slider
			jQuery('#sliderImg' + (PhotoGallery.imageIndex)).addClass('active'); // Active current index photo in main slider
			PhotoGallery.movingHolder.html(''); // Empty moving placeholder
			PhotoGallery.movingHolder.hide(); // Hide moving placeholder
		});
	},
	Prev : function() 
	{
		if(PhotoGallery.imageIndex == 0)
		{	
			PhotoGallery.imageIndex = PhotoGallery.totalImages; // Set the value of index to 0 if its reach to totalimages into slider
		}
		PhotoGallery.imageIndex -= 1; // Decrement index
		PhotoGallery.ImageClass.show();
		PhotoGallery.movingHolder.show(); // Show moving place holder
		PhotoGallery.movingHolder.css({'left':'-' + PhotoGallery.imgWidth + 'px'}); // Put moving placeholder right side of the main slider
		PhotoGallery.sliderHTML = PhotoGallery.sliderList[PhotoGallery.imageIndex];	// Get the html of current index		
		PhotoGallery.movingHolder.html(PhotoGallery.sliderHTML); // Put the html into moving place holder
		jQuery(PhotoGallery.movingHolder).stop(true).animate({left:'0px'}, PhotoGallery.IMAGE_SCROLL_SPEED,'easeInOutExpo',function(){ // Animate moving holder until it's left position become '0px'
			jQuery('.sliderImg').removeClass('active'); // Remove active class from main slider
			jQuery('#sliderImg' + (PhotoGallery.imageIndex)).addClass('active'); // Active current index photo in main slider
			PhotoGallery.movingHolder.html(''); // Empty moving placeholder
			PhotoGallery.movingHolder.hide(); // Hide moving placeholder
		});
	}	
}
jQuery(document).ready(function() {
	PhotoGallery.initial(); // Initialize variables on document ready 
});