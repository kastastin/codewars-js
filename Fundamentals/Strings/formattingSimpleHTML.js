// <-- Formatting simple HTML -->

/*
  Format a source in a simple HTML-dialect.

  A source consists of tags and text.
  It is not necessarily valid HTML, or a complete document ( it may be a snippet ).

  Tags and text
  Tags are either matching opening and closing tags ( <tag>content</tag> ), or self-closed ( <tag /> ).
  All tags* need to be on their own line. There are no inline tags.
  Content between opening and closing tags should be indented.
  No whitespace ( other than indent/newline ) should be before or after tags.

  All ( consecutive ) text needs to be on its own line.
  Text may have spurious whitespace. This needs to be collapsed to single spaces.
  ( Do not reformat whitespace inside tags. )
  Text should not begin or end with whitespace ( other than indent/newline ).

  * Exception: the <br /> tag, when not after a tag, should be after its text without an intervening newline.
  It should be followed by a newline.

  Details
  Newlines must be \n
  Indents must be two spaces per level
  Whitespace in text must be single spaces
  Reformatted source must end with a newline
  There will be a sanity check: repeated application should not change the output
  All input is valid
  There will be no whitespace in tags until after the tag ( <tag or </tag ), and
  there will be no whitespace directly before the closing > ( tag> or /> )
  There will be no angled brackets in tag attribute values ( so no <tag attr="<tag>" /> )
  Preloaded
  For testing and debugging, escHTML and escWS have been predefined; they escape HTML special characters ( & < > ) and whitespace ( tab, newline and space ) respectively for printing to the console. When using both, apply escWS after escHTML, or your spaces will come out as &amp;space;.
*/

// <-- Solution -->
function indent(source) {
  const res = [];
  const re = /<[^>]*>/g;
  const output = (s) => res.push(" ".repeat(indent) + s);

  let m;
  let start = 0;
  let indent = 0;

  while ((m = re.exec(source))) {
    const text = source.slice(start, m.index).trim().replace(/\s+/g, " ");

    if (text) {
      output(text);
    }

    start = m.index + m[0].length;

    if (/<br\s*\/>/.test(m[0]) && text) {
      res[res.length - 1] += m[0];
    } else if (m[0].startsWith("</")) {
      indent -= 2;
      output(m[0]);
    } else if (m[0].endsWith("/>")) {
      output(m[0]);
    } else {
      output(m[0]);
      indent += 2;
    }
  }

  const text = source.slice(start).trim().replace(/\s+/g, " ");

  if (text) {
    output(text);
  }

  return res.map((line) => line + "\n").join("");
}
