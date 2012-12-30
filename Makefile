
build: components index.js digital-clock.css template-digit.js template-clock.js
	@component build --dev

template-clock.js: template-clock.html
	@component convert $<

template-digit.js: template-digit.html
	@component convert $<

components: component.json
	@component install --dev

clean:
	rm -fr build components template-digit.js template-clock.js

.PHONY: clean
