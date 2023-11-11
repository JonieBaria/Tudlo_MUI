import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">Heading</Typography>
        <Typography variant="h2">Heading</Typography>
        <Typography variant="h3">Heading</Typography>
        <Typography variant="h4" component="h1" gutterBottom>Heading</Typography>
        <Typography variant="h5">Heading</Typography>
        <Typography variant="h6">Heading</Typography>

        <Typography variant="subtitle1">Sub Title 1</Typography>
        <Typography variant="subtitle2">Sub Title 2</Typography>

        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa maiores repudiandae ratione voluptate! Delectus nemo, voluptate molestiae, repellat mollitia officia soluta corporis accusantium vero sint labore adipisci, molestias ad.</Typography>
        <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ad ipsum ab molestiae provident tempore soluta! Omnis officiis ad incidunt voluptas, veniam non laborum, sequi maxime iste, facere quod architecto.</Typography>
    </div>
  )
}
