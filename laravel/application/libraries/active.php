<?php

class Active {
	
	private $_apiKey;
  
	public function __construct($apiKey) {
		$this->_apiKey = $apiKey;
        $this->urlString = "http://api.amp.active.com/search?v=json&s=relevance&num=50&m=meta:startDate:daterange:today..+meta%3Achannel%3DRunning&api_key=";
	}
	
	public function searchRacesByCoordinates($searchTerm, $lat, $lng) {
		$url = $this->urlString . $this->_apiKey . "&k=$searchTerm&l=$lat;$lng";
		$json = file_get_contents($url);
		return $json;
	}

	public function searchRacesByPostalCode($searchTerm, $postalCode) {
		$url = $this->urlString . $this->_apiKey . "&k=$searchTerm&l=$postalCode";
		$json = file_get_contents($url);
		return $json;
	}
}