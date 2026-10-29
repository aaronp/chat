PORT ?= 8000

.PHONY: dev test

dev:
	@echo "Serving on http://localhost:$(PORT)/Main.dc.html (Ctrl-C to stop)"
	@python3 -m http.server $(PORT) --bind 127.0.0.1

test:
	node url.test.mjs
