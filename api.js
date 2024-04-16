document.addEventListener("DOMContentLoaded", function() {
  $(document).ready(function() {
    $('.table-row').click(function() {
        // Get the URL from the data attribute
        var url = $(this).data('href');
        // Navigate to the URL
        window.location.href = url;
    });
  });
  
  
  const wsbtc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');
  const wseth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@ticker');
  const wsbnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@ticker');
  const wssol = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@ticker');
  const wsxrp = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@ticker');
  const wsdoge = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@ticker');
  const wsada = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@ticker');
  const wsavax = new WebSocket('wss://stream.binance.com:9443/ws/avaxusdt@ticker');
  const wsshiba = new WebSocket('wss://stream.binance.com:9443/ws/shibusdt@ticker');
  const wsusdc = new WebSocket('wss://stream.binance.com:9443/ws/usdcusdt@ticker');
  const wstron = new WebSocket('wss://stream.binance.com:9443/ws/trxusdt@ticker');
  const wsbtccash = new WebSocket('wss://stream.binance.com:9443/ws/bchusdt@ticker');
  const wsdot = new WebSocket('wss://stream.binance.com:9443/ws/dotusdt@ticker');
  const wsmatic = new WebSocket('wss://stream.binance.com:9443/ws/maticusdt@ticker');
  
  wsbtc.onmessage = function(event) {
  
    const priceElement = document.querySelectorAll('.price')[1];
    const priceVol = document.querySelectorAll('.hour_one')[1];
    const price24h = document.querySelectorAll('.h_24h')[1];
    const volume24hElement = document.querySelectorAll('.volume_24h')[1];
    const volumeUSDT = document.querySelectorAll('.volume')[1];
  
    const message = JSON.parse(event.data);
    const priceChange = parseFloat(message.a);
    const priceChangePercentage = parseFloat(message.P);
    const priceChangePercentage24h = parseFloat(message.p);
    const resultVolume = parseFloat(message.v);
    const volUSDT = parseFloat(message.q);
    
  
    priceElement.innerText = priceChange.toFixed(0) + "$";
    priceVol.innerText = priceChangePercentage.toFixed(2) + "%";
    price24h.innerText = priceChangePercentage24h.toFixed(2) + "%";
    volume24hElement.innerText = resultVolume.toFixed(0) + " BTC";
    volumeUSDT.innerText = volUSDT.toFixed(0) + "$";
  
    if (priceChangePercentage >= 0.00) {
      priceVol.style.color = 'green';
    } else {
      priceVol.style.color = 'red';
    }
  
    if (priceChangePercentage24h >= 0.00) {
      price24h.style.color = 'green';
    } else {
      price24h.style.color = 'red';
    } 
  
    // Additional logic for color based on percentage if needed
  };
  
  wseth.onmessage = function(event) {
  
    const priceElement = document.querySelectorAll('.price')[2];
    const priceVol = document.querySelectorAll('.hour_one')[2];
    const price24h = document.querySelectorAll('.h_24h')[2];
    const volume24hElement = document.querySelectorAll('.volume_24h')[2];
    const volumeUSDT = document.querySelectorAll('.volume')[2];
  
    const message = JSON.parse(event.data);
    const priceChange = parseFloat(message.a);
    const priceChangePercentage = parseFloat(message.P);
    const priceChangePercentage24h = parseFloat(message.p);
    const resultVolume = parseFloat(message.v);
    const volUSDT = parseFloat(message.q);
    
  
    priceElement.innerText = priceChange.toFixed(0) + "$";
    priceVol.innerText = priceChangePercentage.toFixed(2) + "%";
    price24h.innerText = priceChangePercentage24h.toFixed(2) + "%";
    volume24hElement.innerText = resultVolume.toFixed(0) + " ETH";
    volumeUSDT.innerText = volUSDT.toFixed(0) + "$";
  
    if (priceChangePercentage >= 0.00) {
      priceVol.style.color = 'green';
    } else {
      priceVol.style.color = 'red';
    }
  
    if (priceChangePercentage24h >= 0.00) {
      price24h.style.color = 'green';
    } else {
      price24h.style.color = 'red';
    } 
  
    // Additional logic for color based on percentage if needed
  };
  
  wsbnb.onmessage = function(event) {
  
    const priceElement = document.querySelectorAll('.price')[3];
    const priceVol = document.querySelectorAll('.hour_one')[3];
    const price24h = document.querySelectorAll('.h_24h')[3];
    const volume24hElement = document.querySelectorAll('.volume_24h')[3];
    const volumeUSDT = document.querySelectorAll('.volume')[3];
  
    const message = JSON.parse(event.data);
    const priceChange = parseFloat(message.a);
    const priceChangePercentage = parseFloat(message.P);
    const priceChangePercentage24h = parseFloat(message.p);
    const resultVolume = parseFloat(message.v);
    const volUSDT = parseFloat(message.q);
    
  
    priceElement.innerText = priceChange.toFixed(0) + "$";
    priceVol.innerText = priceChangePercentage.toFixed(2) + "%";
    price24h.innerText = priceChangePercentage24h.toFixed(2) + "%";
    volume24hElement.innerText = resultVolume.toFixed(0) + " BNB";
    volumeUSDT.innerText = volUSDT.toFixed(0) + "$";
  
    if (priceChangePercentage >= 0.00) {
      priceVol.style.color = 'green';
    } else {
      priceVol.style.color = 'red';
    }
  
    if (priceChangePercentage24h >= 0.00) {
      price24h.style.color = 'green';
    } else {
      price24h.style.color = 'red';
    } 
  
    // Additional logic for color based on percentage if needed
  };
  
  wssol.onmessage = function(event) {
  
    const priceElement = document.querySelectorAll('.price')[4];
    const priceVol = document.querySelectorAll('.hour_one')[4];
    const price24h = document.querySelectorAll('.h_24h')[4];
    const volume24hElement = document.querySelectorAll('.volume_24h')[4];
    const volumeUSDT = document.querySelectorAll('.volume')[4];
  
    const message = JSON.parse(event.data);
    const priceChange = parseFloat(message.a);
    const priceChangePercentage = parseFloat(message.P);
    const priceChangePercentage24h = parseFloat(message.p);
    const resultVolume = parseFloat(message.v);
    const volUSDT = parseFloat(message.q);
    
  
    priceElement.innerText = priceChange.toFixed(3) + "$";
    priceVol.innerText = priceChangePercentage.toFixed(2) + "%";
    price24h.innerText = priceChangePercentage24h.toFixed(2) + "%";
    volume24hElement.innerText = resultVolume.toFixed(0) + " SOL";
    volumeUSDT.innerText = volUSDT.toFixed(0) + "$";
  
    if (priceChangePercentage >= 0.00) {
      priceVol.style.color = 'green';
    } else {
      priceVol.style.color = 'red';
    }
  
    if (priceChangePercentage24h >= 0.00) {
      price24h.style.color = 'green';
    } else {
      price24h.style.color = 'red';
    } 
  
    // Additional logic for color based on percentage if needed
  };
  
  wsxrp.onmessage = function(event) {
  
    const priceElement = document.querySelectorAll('.price')[5];
    const priceVol = document.querySelectorAll('.hour_one')[5];
    const price24h = document.querySelectorAll('.h_24h')[5];
    const volume24hElement = document.querySelectorAll('.volume_24h')[5];
    const volumeUSDT = document.querySelectorAll('.volume')[5];
  
    const message = JSON.parse(event.data);
    const priceChange = parseFloat(message.a);
    const priceChangePercentage = parseFloat(message.P);
    const priceChangePercentage24h = parseFloat(message.p);
    const resultVolume = parseFloat(message.v);
    const volUSDT = parseFloat(message.q);
    
  
    priceElement.innerText = priceChange.toFixed(3) + "$";
    priceVol.innerText = priceChangePercentage.toFixed(2) + "%";
    price24h.innerText = priceChangePercentage24h.toFixed(2) + "%";
    volume24hElement.innerText = resultVolume.toFixed(0) + " XRP";
    volumeUSDT.innerText = volUSDT.toFixed(0) + "$";
  
    if (priceChangePercentage >= 0.00) {
      priceVol.style.color = 'green';
    } else {
      priceVol.style.color = 'red';
    }
  
    if (priceChangePercentage24h >= 0.00) {
      price24h.style.color = 'green';
    } else {
      price24h.style.color = 'red';
    } 
  
    // Additional logic for color based on percentage if needed
  };
  
  wsdoge.onmessage = function(event) {
  
    const priceElement = document.querySelectorAll('.price')[6];
    const priceVol = document.querySelectorAll('.hour_one')[6];
    const price24h = document.querySelectorAll('.h_24h')[6];
    const volume24hElement = document.querySelectorAll('.volume_24h')[6];
    const volumeUSDT = document.querySelectorAll('.volume')[6];
  
    const message = JSON.parse(event.data);
    const priceChange = parseFloat(message.a);
    const priceChangePercentage = parseFloat(message.P);
    const priceChangePercentage24h = parseFloat(message.p);
    const resultVolume = parseFloat(message.v);
    const volUSDT = parseFloat(message.q);
    
  
    priceElement.innerText = priceChange.toFixed(3) + "$";
    priceVol.innerText = priceChangePercentage.toFixed(2) + "%";
    price24h.innerText = priceChangePercentage24h.toFixed(2) + "%";
    volume24hElement.innerText = resultVolume.toFixed(0) + " DOGE";
    volumeUSDT.innerText = volUSDT.toFixed(0) + "$";
  
    if (priceChangePercentage >= 0.00) {
      priceVol.style.color = 'green';
    } else {
      priceVol.style.color = 'red';
    }
  
    if (priceChangePercentage24h >= 0.00) {
      price24h.style.color = 'green';
    } else {
      price24h.style.color = 'red';
    } 
  
    // Additional logic for color based on percentage if needed
  };
  
  wsada.onmessage = function(event) {
  
    const priceElement = document.querySelectorAll('.price')[7];
    const priceVol = document.querySelectorAll('.hour_one')[7];
    const price24h = document.querySelectorAll('.h_24h')[7];
    const volume24hElement = document.querySelectorAll('.volume_24h')[7];
    const volumeUSDT = document.querySelectorAll('.volume')[7];
  
    const message = JSON.parse(event.data);
    const priceChange = parseFloat(message.a);
    const priceChangePercentage = parseFloat(message.P);
    const priceChangePercentage24h = parseFloat(message.p);
    const resultVolume = parseFloat(message.v);
    const volUSDT = parseFloat(message.q);
    
  
    priceElement.innerText = priceChange.toFixed(3) + "$";
    priceVol.innerText = priceChangePercentage.toFixed(2) + "%";
    price24h.innerText = priceChangePercentage24h.toFixed(2) + "%";
    volume24hElement.innerText = resultVolume.toFixed(0) + " ADA";
    volumeUSDT.innerText = volUSDT.toFixed(0) + "$";
  
    if (priceChangePercentage >= 0.00) {
      priceVol.style.color = 'green';
    } else {
      priceVol.style.color = 'red';
    }
  
    if (priceChangePercentage24h >= 0.00) {
      price24h.style.color = 'green';
    } else {
      price24h.style.color = 'red';
    } 
  
    // Additional logic for color based on percentage if needed
  };
  
  wsavax.onmessage = function(event) {
  
    const priceElement = document.querySelectorAll('.price')[8];
    const priceVol = document.querySelectorAll('.hour_one')[8];
    const price24h = document.querySelectorAll('.h_24h')[8];
    const volume24hElement = document.querySelectorAll('.volume_24h')[8];
    const volumeUSDT = document.querySelectorAll('.volume')[8];
  
    const message = JSON.parse(event.data);
    const priceChange = parseFloat(message.a);
    const priceChangePercentage = parseFloat(message.P);
    const priceChangePercentage24h = parseFloat(message.p);
    const resultVolume = parseFloat(message.v);
    const volUSDT = parseFloat(message.q);
    
  
    priceElement.innerText = priceChange.toFixed(3) + "$";
    priceVol.innerText = priceChangePercentage.toFixed(2) + "%";
    price24h.innerText = priceChangePercentage24h.toFixed(2) + "%";
    volume24hElement.innerText = resultVolume.toFixed(0) + " AVAX";
    volumeUSDT.innerText = volUSDT.toFixed(0) + "$";
  
    if (priceChangePercentage >= 0.00) {
      priceVol.style.color = 'green';
    } else {
      priceVol.style.color = 'red';
    }
  
    if (priceChangePercentage24h >= 0.00) {
      price24h.style.color = 'green';
    } else {
      price24h.style.color = 'red';
    } 
  
    // Additional logic for color based on percentage if needed
  };
  
  wsshiba.onmessage = function(event) {
  
    const priceElement = document.querySelectorAll('.price')[9];
    const priceVol = document.querySelectorAll('.hour_one')[9];
    const price24h = document.querySelectorAll('.h_24h')[9];
    const volume24hElement = document.querySelectorAll('.volume_24h')[9];
    const volumeUSDT = document.querySelectorAll('.volume')[9];
  
    const message = JSON.parse(event.data);
    const priceChange = parseFloat(message.a);
    const priceChangePercentage = parseFloat(message.P);
    const priceChangePercentage24h = parseFloat(message.p);
    const resultVolume = parseFloat(message.v);
    const volUSDT = parseFloat(message.q);
    
  
    priceElement.innerText = priceChange.toFixed(7) + "$";
    priceVol.innerText = priceChangePercentage.toFixed(2) + "%";
    price24h.innerText = priceChangePercentage24h.toFixed(2) + "%";
    volume24hElement.innerText = resultVolume.toFixed(0) + " SHIB";
    volumeUSDT.innerText = volUSDT.toFixed(0) + "$";
  
    if (priceChangePercentage >= 0.00) {
      priceVol.style.color = 'green';
    } else {
      priceVol.style.color = 'red';
    }
  
    if (priceChangePercentage24h >= 0.00) {
      price24h.style.color = 'green';
    } else {
      price24h.style.color = 'red';
    } 
  
    // Additional logic for color based on percentage if needed
  };
  
  wsusdc.onmessage = function(event) {
  
    const priceElement = document.querySelectorAll('.price')[10];
    const priceVol = document.querySelectorAll('.hour_one')[10];
    const price24h = document.querySelectorAll('.h_24h')[10];
    const volume24hElement = document.querySelectorAll('.volume_24h')[10];
    const volumeUSDT = document.querySelectorAll('.volume')[10];
  
    const message = JSON.parse(event.data);
    const priceChange = parseFloat(message.a);
    const priceChangePercentage = parseFloat(message.P);
    const priceChangePercentage24h = parseFloat(message.p);
    const resultVolume = parseFloat(message.v);
    const volUSDT = parseFloat(message.q);
    
  
    priceElement.innerText = priceChange.toFixed(3) + "$";
    priceVol.innerText = priceChangePercentage.toFixed(2) + "%";
    price24h.innerText = priceChangePercentage24h.toFixed(2) + "%";
    volume24hElement.innerText = resultVolume.toFixed(0) + " USDC";
    volumeUSDT.innerText = volUSDT.toFixed(0) + "$";
  
    if (priceChangePercentage >= 0.00) {
      priceVol.style.color = 'green';
    } else {
      priceVol.style.color = 'red';
    }
  
    if (priceChangePercentage24h >= 0.00) {
      price24h.style.color = 'green';
    } else {
      price24h.style.color = 'red';
    } 
  
    // Additional logic for color based on percentage if needed
  };
  
  wstron.onmessage = function(event) {
  
    const priceElement = document.querySelectorAll('.price')[11];
    const priceVol = document.querySelectorAll('.hour_one')[11];
    const price24h = document.querySelectorAll('.h_24h')[11];
    const volume24hElement = document.querySelectorAll('.volume_24h')[11];
    const volumeUSDT = document.querySelectorAll('.volume')[11];
  
    const message = JSON.parse(event.data);
    const priceChange = parseFloat(message.a);
    const priceChangePercentage = parseFloat(message.P);
    const priceChangePercentage24h = parseFloat(message.p);
    const resultVolume = parseFloat(message.v);
    const volUSDT = parseFloat(message.q);
    
  
    priceElement.innerText = priceChange.toFixed(3) + "$";
    priceVol.innerText = priceChangePercentage.toFixed(2) + "%";
    price24h.innerText = priceChangePercentage24h.toFixed(2) + "%";
    volume24hElement.innerText = resultVolume.toFixed(0) + " TRX";
    volumeUSDT.innerText = volUSDT.toFixed(0) + "$";
  
    if (priceChangePercentage >= 0.00) {
      priceVol.style.color = 'green';
    } else {
      priceVol.style.color = 'red';
    }
  
    if (priceChangePercentage24h >= 0.00) {
      price24h.style.color = 'green';
    } else {
      price24h.style.color = 'red';
    } 
  
    // Additional logic for color based on percentage if needed
  };
  
  wsbtccash.onmessage = function(event) {
  
    const priceElement = document.querySelectorAll('.price')[12];
    const priceVol = document.querySelectorAll('.hour_one')[12];
    const price24h = document.querySelectorAll('.h_24h')[12];
    const volume24hElement = document.querySelectorAll('.volume_24h')[12];
    const volumeUSDT = document.querySelectorAll('.volume')[12];
  
    const message = JSON.parse(event.data);
    const priceChange = parseFloat(message.a);
    const priceChangePercentage = parseFloat(message.P);
    const priceChangePercentage24h = parseFloat(message.p);
    const resultVolume = parseFloat(message.v);
    const volUSDT = parseFloat(message.q);
    
  
    priceElement.innerText = priceChange.toFixed(0) + "$";
    priceVol.innerText = priceChangePercentage.toFixed(2) + "%";
    price24h.innerText = priceChangePercentage24h.toFixed(2) + "%";
    volume24hElement.innerText = resultVolume.toFixed(0) + " BCH";
    volumeUSDT.innerText = volUSDT.toFixed(0) + "$";
  
    if (priceChangePercentage >= 0.00) {
      priceVol.style.color = 'green';
    } else {
      priceVol.style.color = 'red';
    }
  
    if (priceChangePercentage24h >= 0.00) {
      price24h.style.color = 'green';
    } else {
      price24h.style.color = 'red';
    } 
  
    // Additional logic for color based on percentage if needed
  };
  
  wsdot.onmessage = function(event) {
  
    const priceElement = document.querySelectorAll('.price')[13];
    const priceVol = document.querySelectorAll('.hour_one')[13];
    const price24h = document.querySelectorAll('.h_24h')[13];
    const volume24hElement = document.querySelectorAll('.volume_24h')[13];
    const volumeUSDT = document.querySelectorAll('.volume')[13];
  
    const message = JSON.parse(event.data);
    const priceChange = parseFloat(message.a);
    const priceChangePercentage = parseFloat(message.P);
    const priceChangePercentage24h = parseFloat(message.p);
    const resultVolume = parseFloat(message.v);
    const volUSDT = parseFloat(message.q);
    
  
    priceElement.innerText = priceChange.toFixed(2) + "$";
    priceVol.innerText = priceChangePercentage.toFixed(2) + "%";
    price24h.innerText = priceChangePercentage24h.toFixed(2) + "%";
    volume24hElement.innerText = resultVolume.toFixed(0) + " DOT";
    volumeUSDT.innerText = volUSDT.toFixed(0) + "$";
  
    if (priceChangePercentage >= 0.00) {
      priceVol.style.color = 'green';
    } else {
      priceVol.style.color = 'red';
    }
  
    if (priceChangePercentage24h >= 0.00) {
      price24h.style.color = 'green';
    } else {
      price24h.style.color = 'red';
    } 
  
    // Additional logic for color based on percentage if needed
  };
  
  wsmatic.onmessage = function(event) {
  
    const priceElement = document.querySelectorAll('.price')[14];
    const priceVol = document.querySelectorAll('.hour_one')[14];
    const price24h = document.querySelectorAll('.h_24h')[14];
    const volume24hElement = document.querySelectorAll('.volume_24h')[14];
    const volumeUSDT = document.querySelectorAll('.volume')[14];
  
    const message = JSON.parse(event.data);
    const priceChange = parseFloat(message.a);
    const priceChangePercentage = parseFloat(message.P);
    const priceChangePercentage24h = parseFloat(message.p);
    const resultVolume = parseFloat(message.v);
    const volUSDT = parseFloat(message.q);
    
  
    priceElement.innerText = priceChange.toFixed(4) + "$";
    priceVol.innerText = priceChangePercentage.toFixed(2) + "%";
    price24h.innerText = priceChangePercentage24h.toFixed(2) + "%";
    volume24hElement.innerText = resultVolume.toFixed(0) + " MATIC";
    volumeUSDT.innerText = volUSDT.toFixed(0) + "$";
  
    if (priceChangePercentage >= 0.00) {
      priceVol.style.color = 'green';
    } else {
      priceVol.style.color = 'red';
    }
  
    if (priceChangePercentage24h >= 0.00) {
      price24h.style.color = 'green';
    } else {
      price24h.style.color = 'red';
    } 
  
    // Additional logic for color based on percentage if needed
  };
});



// const anotherws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@ticker');

// anotherws.onopen = function(event) {
//   console.log('WebSocket connection established.');
// };

// anotherws.onmessage = function(event) {
//   const message = JSON.parse(event.data);
//   console.log('Received message:', message);
// };

// anotherws.onerror = function(error) {
//   console.error('WebSocket error:', error);
// };

// anotherws.onclose = function(event) {
//   console.log('WebSocket connection closed.');
// };

