<?xml version="1.0" encoding="UTF-8"?><xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"><xsl:template match="/">	<html>		<body>
			<table>
				<tr>
					<th>Index</th>
					<th>Artist</th>
					<th>Album title</th>
				</tr>				<xsl:apply-templates select="albums/album"/>
			</table>		</body>
	</html>
</xsl:template>
<xsl:template match="album">
	<xsl:element name="tr">
		<xsl:element name="td">
			<xsl:value-of select="@albumindex" />
		</xsl:element>	
		<xsl:element name="td">
			<xsl:value-of select="a" />
		</xsl:element>
		<xsl:element name="td">
			<xsl:value-of select="t" />
		</xsl:element>
	</xsl:element>
</xsl:template>
</xsl:stylesheet>