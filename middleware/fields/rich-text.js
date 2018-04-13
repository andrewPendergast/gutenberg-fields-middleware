/**
 * Text field.
 */

const { RichText } = wp.blocks;

export default function richText( props, config, attributeKey ) {
	const defaultAttributes = {
		value: props.attributes[ attributeKey ] || '',
		inlineToolbar: true,
		isSelected: false,
		onFocus() {
			this.isSelected = true;
		},
	};

	const fieldAttributes = _.extend( defaultAttributes, config );

	fieldAttributes.onChange = ( value ) => {
		if ( config.onChange ) {
			config.onChange( value, props );
		} else {
			const newAttributes = {};
			newAttributes[ attributeKey ] = value;
			props.setAttributes( newAttributes );
		}
	};

	delete fieldAttributes.type;

	return (
		<RichText
			{ ...fieldAttributes }
		/>
	);
}
