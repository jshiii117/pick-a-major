import {
  Container,
  Typography,
  Grid,
  Card,
  List,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { MAJORS_LIST } from "../utils/constants";
import Breadcrumb from "./Breadcrumb";

function MajorPage() {
  const params = useParams();
  const data = MAJORS_LIST[params.major];

  let sectionInfo = [
    {
      title: `What is ${
        ["a", "e", "i", "o", "u"].includes(data.name[0].toLowerCase())
          ? "an "
          : "a "
      }
      ${data.name} Major?`,
      color: "BobaBeige.main",
      info: data.desc,
    },
    {
      title: "Classes",
      color: "BobaPink.main",
      info: data.classes,
    },
    {
      title: `What skills do those in ${data.name} have?`,
      color: "Lavender.main",
      info: data.skills,
    },
    {
      title: "Careers",
      color: "BobaBeige.main",
      info: data.careers,
    },
  ];

  return (
    <Container sx={{ minWidth: "70%" }}>
      <Breadcrumb
        breadcrumbs={[
          { url: "/", label: "Home" },
          { label: `${data.name} (Major)` },
        ]}
      />
      <Typography
        variant="h1"
        sx={{
          margin: "2rem auto",
          textAlign: "center",
        }}
      >
        {data.name} (Major)
      </Typography>

      <Grid container spacing={4} sx={{ paddingX: "1rem" }}>
        {sectionInfo.map((item, index) => {
          return (
            <Grid item key={index} xs={12} md={6}>
              <Card
                sx={{
                  boxShadow: "none",
                  backgroundColor: `${item.color}`,
                  height: "100%",
                  boxSizing: "border-box",
                }}
              >
                <Typography variant="h3" sx={{ paddingBottom: "1.5rem" }}>
                  {item.title}
                </Typography>
                <Typography variant="body">
                  {Array.isArray(item.info) ? (
                    <List
                      sx={{
                        listStyleType: "disc",
                        paddingLeft: "1.75rem",
                      }}
                    >
                      {item.info.map((item, index) => {
                        return (
                          <ListItemText
                            key={`${item.name}-${index}`}
                            sx={{ display: "list-item" }}
                          >
                            <Typography variant="body">{item}</Typography>
                          </ListItemText>
                        );
                      })}
                    </List>
                  ) : (
                    item.info
                  )}
                </Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default MajorPage;
