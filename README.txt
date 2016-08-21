Src contains pre-transpiled .jsx files

Lib contains post-transpiled .jsx files

(Transpilation of .jsx files done using react-tools)

Model contains requireJS modules representing the data model
	-Product
	-Invoice
	-InvoiceProduct

The Invoice object/class uses a custom tupe Moment for the date variable. Moment is a custom data type to represent date/time used in DatePicker of OrderForm.

RequireJS dependency tree looks something like the following: (React is left out since all UI components depend on it)

main.js
	model/Invoice
	model/InvoiceProduct
	ProductSelector
		ProductDisplay
			model/InvoiceProduct
			ProductSearch
				ProductFinder
					mode/Product
			ProductEdit
	InvoiceDisplay
		InvoiceProductDisplay
		SectionHeader
		Constants
	OrderForm
		moment
		DatePicker
		SectionHeader
		Constants
	InvoiceSelector
		InvoiceThumbnail