(function() {var implementors = {};
implementors["embedded_hal"] = [];
implementors["esp_idf_hal"] = [{"text":"impl <a class=\"trait\" href=\"embedded_hal/spi/trait.ErrorType.html\" title=\"trait embedded_hal::spi::ErrorType\">ErrorType</a> for <a class=\"struct\" href=\"esp_idf_hal/spi/struct.MasterBus.html\" title=\"struct esp_idf_hal::spi::MasterBus\">MasterBus</a>","synthetic":false,"types":["esp_idf_hal::spi::MasterBus"]},{"text":"impl&lt;SPI:&nbsp;<a class=\"trait\" href=\"esp_idf_hal/spi/trait.Spi.html\" title=\"trait esp_idf_hal::spi::Spi\">Spi</a>, SCLK:&nbsp;<a class=\"trait\" href=\"esp_idf_hal/gpio/trait.OutputPin.html\" title=\"trait esp_idf_hal::gpio::OutputPin\">OutputPin</a>, SDO:&nbsp;<a class=\"trait\" href=\"esp_idf_hal/gpio/trait.OutputPin.html\" title=\"trait esp_idf_hal::gpio::OutputPin\">OutputPin</a>, SDI:&nbsp;<a class=\"trait\" href=\"esp_idf_hal/gpio/trait.InputPin.html\" title=\"trait esp_idf_hal::gpio::InputPin\">InputPin</a> + <a class=\"trait\" href=\"esp_idf_hal/gpio/trait.OutputPin.html\" title=\"trait esp_idf_hal::gpio::OutputPin\">OutputPin</a>, CS:&nbsp;<a class=\"trait\" href=\"esp_idf_hal/gpio/trait.OutputPin.html\" title=\"trait esp_idf_hal::gpio::OutputPin\">OutputPin</a>&gt; <a class=\"trait\" href=\"embedded_hal/spi/trait.ErrorType.html\" title=\"trait embedded_hal::spi::ErrorType\">ErrorType</a> for <a class=\"struct\" href=\"esp_idf_hal/spi/struct.Master.html\" title=\"struct esp_idf_hal::spi::Master\">Master</a>&lt;SPI, SCLK, SDO, SDI, CS&gt;","synthetic":false,"types":["esp_idf_hal::spi::Master"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()