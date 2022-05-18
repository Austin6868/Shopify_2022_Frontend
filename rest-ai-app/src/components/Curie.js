import React from 'react'
import { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
const { Configuration, OpenAIApi } = require("openai");

class Curie extends Component {
    constructor(){
        super()
        this.state = {
            heading:'The response from the AI will be shown here',
            response: '..... await the response'
        }
    }

    onFormSubmit = e => {
        e.preventDefault()

        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj.prompt)


        // This is the request for openAI
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
          });

          const openai = new OpenAIApi(configuration);
          openai.createCompletion("text-curie-001", {
            prompt: `${formDataObj.prompt}`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          })
          .then((response) => {
              this.setState({
                  heading: `Prompt: ${formDataObj.prompt}`,
                  respone: `${response.data.choices[0].text}`
              })
          });
          //End of openAI commands

    }

    render() {
        return (
            <Container className="mt-5" style={{
                
            }}>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                        <Form.Label>Enter your prompt</Form.Label>
                        <Form.Control name="prompt" as="textarea" rows={3} placeholder="Prompt to generate text" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Card style={{ marginTop:'2rem' }}>
                    <Card.Body>
                        <Card.Title>{this.state.heading}</Card.Title>
                        <Card.Text>
                            Response:{this.state.response}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        )
    }

}

export default Curie


