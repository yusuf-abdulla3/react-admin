import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">An Important Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur mattis iaculis. Curabitur finibus, felis et venenatis porttitor, urna nulla imperdiet turpis, eu vestibulum purus arcu at nunc. Etiam sed sodales libero. Donec placerat bibendum leo, ac pellentesque erat rutrum vulputate. Duis lobortis ornare enim et maximus. Fusce tempor elementum feugiat. Proin sollicitudin aliquet nisi, in vulputate urna laoreet in. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">Another Important Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur mattis iaculis. Curabitur finibus, felis et venenatis porttitor, urna nulla imperdiet turpis, eu vestibulum purus arcu at nunc. Etiam sed sodales libero. Donec placerat bibendum leo, ac pellentesque erat rutrum vulputate. Duis lobortis ornare enim et maximus. Fusce tempor elementum feugiat. Proin sollicitudin aliquet nisi, in vulputate urna laoreet in. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">Your Favourite Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur mattis iaculis. Curabitur finibus, felis et venenatis porttitor, urna nulla imperdiet turpis, eu vestibulum purus arcu at nunc. Etiam sed sodales libero. Donec placerat bibendum leo, ac pellentesque erat rutrum vulputate. Duis lobortis ornare enim et maximus. Fusce tempor elementum feugiat. Proin sollicitudin aliquet nisi, in vulputate urna laoreet in. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">Some Random Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur mattis iaculis. Curabitur finibus, felis et venenatis porttitor, urna nulla imperdiet turpis, eu vestibulum purus arcu at nunc. Etiam sed sodales libero. Donec placerat bibendum leo, ac pellentesque erat rutrum vulputate. Duis lobortis ornare enim et maximus. Fusce tempor elementum feugiat. Proin sollicitudin aliquet nisi, in vulputate urna laoreet in. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">The Final Question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur mattis iaculis. Curabitur finibus, felis et venenatis porttitor, urna nulla imperdiet turpis, eu vestibulum purus arcu at nunc. Etiam sed sodales libero. Donec placerat bibendum leo, ac pellentesque erat rutrum vulputate. Duis lobortis ornare enim et maximus. Fusce tempor elementum feugiat. Proin sollicitudin aliquet nisi, in vulputate urna laoreet in. 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ;