FROM cgr.dev/chainguard/kubectl:latest 

HEALTHCHECK --timeout=10s CMD /bin/true || exit 1

#COPY log4j-core-2.14.1.jar /
#COPY --from=kubectl /usr/bin/kubectl /usr/bin/kubectl

#RUN set -ex && \
#    microdnf -y install yum-utils python3-devel python3 python3-pip nodejs shadow-utils tar gzip && \
#    yum-config-manager --add-repo https://rpm.releases.hashicorp.com/RHEL/hashicorp.repo && \
#    microdnf -y install terraform && \
#    adduser -d /xmrig mining && \
#    pip3 install --index-url https://pypi.org/simple --no-cache-dir aiohttp==3.7.3 pytest==7.0.1 urllib3==1.26.10 botocore==1.26.9 six==1.15.0 numpy==1.19.4 protobuf==3.20 && \
#    npm install -g --cache /tmp/empty-cache debug chalk commander xmldom@0.4.0 && \
#    npm cache clean --force && \
#    microdnf -y clean all && \
#    rm -rf /var/cache/yum /tmp 

ENTRYPOINT /bin/false
